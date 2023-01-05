const SingleEvent = ({data}: any) => {
  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <p> {data.description} </p>
      <form className="email_registration">
        <label> Get Registered for this event!</label>
        <input
          ref=''
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
      <p>Message here</p>
    </div>
  );
};

export default SingleEvent