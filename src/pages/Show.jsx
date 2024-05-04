import { Link, Form, useLoaderData } from "react-router-dom"

const Show = () => {

    const aConcert = useLoaderData()
    return (
        <>
        <div>
            <h1>{aConcert.lineup}</h1>
            <img src={aConcert.flyerUrl} alt="flyer"/>
                <h2>{aConcert.date}</h2>
                <h2>{aConcert.venue}</h2>
                <h2>{aConcert.price}</h2>
                
                <Form action= {`/update/${aConcert.id}`} method="POST">
                <label htmlFor="lineup">
                    <input type="text" name="lineup" id="lineup" defaultValue={aConcert.lineup}/>
                </label>
                <label htmlFor="flyerUrl">
                    <input type="text" name="flyerUrl" id="flyerUrl" defaultValue={aConcert.flyerUrl}/>
                </label>
                <label htmlFor="date">
                    <input type="text" name="date" id="date" defaultValue={aConcert.date}/>
                </label>
                <label htmlFor="venue">
                    <input type="text" name="venue" id="venue" defaultValue={aConcert.venue}/>
                </label>
                <label htmlFor="price">
                    <input type="text" name="price" id="price" defaultValue={aConcert.price}/>
                </label>
                <hr />
                <button type="submit">Update Show</button>
            </Form>
            <Form action={`/delete/${aConcert.id}`} method="post">
          <button>Delete Concert!</button>
        </Form>
        </div>
        <div>
        <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
        </>
    )
}
export default Show;