const Notification = ({ notification }) => {
  if (notification === null) return null;

  const { message, isError } = notification;
  return (
    <div className={"notification " + (isError ? "error" : "success")}>
      {message}
    </div>
  );
};

export default Notification;
