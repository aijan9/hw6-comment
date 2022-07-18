const Avatar = (props) => {
  return (
    <div className="avatar"><img
      className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
    </div>
  );
};

export default Avatar;
