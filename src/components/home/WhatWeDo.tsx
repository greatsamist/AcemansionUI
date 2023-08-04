import weddingIcon from "../../assets/images/home/weddingIcon.png";
import eventIcon from "../../assets/images/home/eventImage.png";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col my-24 px-4">
      <h6 className="tracking-[.2em]">ACE MANSION STUDIO</h6>
      <h3 className="text-[40px] lg:text-[80px]">This is What We Do</h3>
      <div></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
        <WhatWeDoItems
          title="Event Videography"
          text="Our event videography services cover a wide range of occasions, including weddings, corporate events, conferences, trade shows, and more. Let us capture the essence of your event and create a timeless keepsake that you'll cherish forever."
          icon={eventIcon}
        />
        <WhatWeDoItems
          title="Wedding Video Film"
          text="This is a very interesting text"
          icon={weddingIcon}
        />
        <WhatWeDoItems
          title="Brand Video"
          text="This is a very interesting text"
          icon={eventIcon}
        />
        <WhatWeDoItems
          title="Music Video"
          text="This is a very interesting text"
          icon={eventIcon}
        />
        <WhatWeDoItems
          title="Documentary film"
          text="This is a very interesting text"
          icon={eventIcon}
        />
        <WhatWeDoItems
          title="Post-Production"
          text="Our post-production team brings the magic to your videos, enhancing visuals, adding music, and applying special effects to create a cinematic masterpiece."
          icon={eventIcon}
        />
      </div>
    </div>
  );
};

const WhatWeDoItems = ({ title, icon, text }: WhatWeDoItemsProps) => {
  return (
    <div className="flex gap-4">
      <div className="h-[75px] min-w-[75px]">
        <img className="w-full h-full" src={icon} alt={title} />
      </div>
      <div className="flex flex-col">
        <h5 className="tracking-widest">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

interface WhatWeDoItemsProps {
  title: string;
  text: string;
  icon: string;
}

export default WhatWeDo;
