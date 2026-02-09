type AvatarProps = {
  image?: string;
  name: string;
};

const Avatar = ({ image, name }: AvatarProps) => {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="h-8 w-8 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-700">
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
