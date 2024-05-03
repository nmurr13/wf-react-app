import BandCampPlayer from "../components/BandcampPlayer"
import Concert from "../components/Concert"
import { Form, useLoaderData } from "react-router-dom"

const Index = (props) => {
    const allConcerts = useLoaderData()

    return (
        <>
        <h1>Shows</h1>
            <hr />
            {allConcerts.map((concert, i) => <Concert concert={concert} 
            key={i}/>)}
            
         <Form action="concerts/create" method="post">
                <label htmlFor="lineup">
                    <input type="text" name="lineup" id="lineup" placeholder="lineup"/>
                </label>
                <label htmlFor="flyerUrl">
                    <input type="text" name="flyerUrl" id="flyerUrl" placeholder="flyer URL"/>
                </label>
                <label htmlFor="date">
                    <input type="text" name="date" id="date" placeholder="date"/>
                </label>
                <label htmlFor="venue">
                    <input type="text" name="venue" id="venue" placeholder="venue"/>
                </label>
                <label htmlFor="price">
                    <input type="text" name="price" id="price" placeholder="price & time"/>
                </label>
                <hr />
                <button type="submit">Add New Show</button>
            </Form>
            
        
            <BandCampPlayer/>
        </>
    )
}
export default Index;