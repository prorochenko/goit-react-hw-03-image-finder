export default function ImageGalleryItem({ picture: { hits } }) {
  return (
    <li key={hits.id}>
      <img src={hits[0].largeImageURL} alt={hits[0].tags} width="300" />
    </li>
  );
}
