import { Button } from "./Button";

interface Props {
  title: string;
  location: string;
  time: string;
  description: string;
  link: string;
  image: string;
}

export const LocationCard = ({
  title,
  location,
  time,
  description,
  link,
  image,
}: Props) => {
  return (
    <article className="bg-nyanza-4 custom-rounded p-10 pb-0 flex flex-col justify-center items-center">
      <img src={image} alt={description} className="custom-rounded shadow-gray-400 shadow-lg aspect-video md:h-64"/>
      <h2 className="text-5xl font-great-vibes text-olive-3 mt-10 mb-5">{title}</h2>
      <p className="font-montserrat text-olive-2 text-center">{location}</p>
      <p className="font-montserrat text-olive-2 text-center">{time}</p>
      <p className="font-montserrat text-olive-2 text-center">{description}</p>
      <Button as="a" href={link} text="Como llegar" targetBlank/>
    </article>
  );
};
