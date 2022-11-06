import errorImage from './error.png';

export default function PictureFounfFail({ message }) {
  return (
    <div>
      <img src={errorImage} width="240" alt="not found" />
      <p>{message}</p>
    </div>
  );
}
