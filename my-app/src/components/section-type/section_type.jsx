import Image from 'next/image'
import Home from '@/pages';
const SectionType = ({data, sectionName}) =>{
return(
    <div class="container">
        <h1>{sectionName}</h1>
          <div class="row">
            {data.map((sec) => (
              <div class="col-lg-4">
                <Image  height={300} width={300} src='https://picsum.photos/200/300' alt={sec.title}/>
                <p>{sec.title}</p>
                <p>{sec.slug}</p>
                <p>{sec.brand}</p>
              </div>
            )
            )}
          </div>
        </div>
);
    
}
export default SectionType;