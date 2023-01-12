import Image from 'next/image'
import {useRef} from "react";
import {useRouter} from "next/router";
import imageLoader from "../../../imageLoader";

const SingleEvent = ({data}: any) => {

  // this is the value entered into the email box in the form
  const inputEmail = useRef(null);
  console.log(inputEmail)
  const router = useRouter()

  const onSubmit = async (e: any) => {
    e.preventDefault()

    // @ts-ignore
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailValue, eventId})
      })
      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
      console.log('POST', data)

    } catch (e) {
      console.log(e, 'Error')
    }
  }

  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image loader={imageLoader} unoptimized={true} src={data.image} width={1000} height={500} alt={data.title}/>
      <p> {data.description} </p>
      <form className="email_registration" onSubmit={onSubmit}>
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
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