const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

export default function InteractiveMap() {
  return (
    <>
      <iframe
        width="100%"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPe7L6Q3zT0YR9m2RYyuQP7s&key=${VITE_GOOGLE_MAPS_API_KEY}`}
      />
    </>
  );
}
