import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          width="40"
        />
        <span className="font-medium">John doe</span>
        <span className="text-gray-500 text-sm">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          reprehenderit, doloremque, voluptatibus cumque, eveniet quidem
          quibusdam minima iusto deserunt magnam asperiores alias. Repudiandae
          reiciendis, voluptatibus quisquam velit autem cumque maiores.
        </p>
      </div>
    </div>
  );
};

export default Comment;
