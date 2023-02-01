import Image from 'next/image'
import Navbar from './navbar';
const SectionType = ({ data, sectionName }) => {
  return (
    <div class="container">
      <Navbar />
      <h1>{sectionName}</h1>
      <div class="row">
        {data.map((sec) => (
          <div class="col-lg-4">
            <Image class="rounded" height={300} width={300} src='https://picsum.photos/200/300' alt={sec.title} />
            <h5>{sec.title}</h5>
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