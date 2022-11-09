export default function ImageGalleryItem({ picture: { hits } }) {
  return (
    <ul>
      <li key={hits[0].id}>
        <img src={hits[0].largeImageURL} alt={hits[0].tags} width="300" />
      </li>
    </ul>
  );
}
