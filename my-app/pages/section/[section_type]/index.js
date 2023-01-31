import SectionType from "@/src/components/section-type/section_type";

const SectionTypePage = ({ data, sectionName }) => <SectionType data={data} sectionName={sectionName} />
export default SectionTypePage;

export async function getStaticPaths() {
    const res = await fetch("https://prodapp.lifepharmacy.com/api/cms/page/home");
    const data = await res.json();
    const content = data.data.content;
    var section_type = [];

    //collecting all section_types
    content.map(con=>{
        section_type.push(con.section_type);
    });

    //removing duplicates from the section_type
    let uniqueChars = [...new Set(section_type)];

     //assigning all possible paths to params
    const allPaths = uniqueChars.map((ev) => {
        return {
            params: {
                section_type: ev.toString(),
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
    };
}
export async function getStaticProps(context) {
    const res = await fetch("https://prodapp.lifepharmacy.com/api/cms/page/home");
    const data = await res.json();
    var section_type = [];
    const content = data.data.content;

    for (var con of content) {
        section_type.push(con.section_type);
    }

        // all grids filtered based on the link clciked
        const filter_data = content.filter(d => d.section_type === context.params.section_type);

 
        var section_data = [];

        //iterating through each section_data_array of all content of the filtered section_type
        for (var con of filter_data) {
            for (var sec of con.section_data_array) {
                section_data.push(sec);
            }
        }
        // console.log(con.section_data_array);
 
    // console.log(section_data[0].desktop.image_url);

    // console.log(data_content);

    // console.log(filter_data.map(e => e.section_data_array));
console.log(context);
    return {
        props: {
            data: section_data,
            sectionName: context.params.section_type,
        }
    }


}