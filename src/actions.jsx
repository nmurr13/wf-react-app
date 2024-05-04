import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL

// Create Action 
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    const newConcert = {
        lineup: formData.get("lineup"),
        flyerUrl: formData.get("flyerUrl"),
        venue: formData.get("venue"),
        price: formData.get("price"),

    }

    await fetch(`${URL}concerts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newConcert)
    })

    // redirect back to the index
    return redirect("/")
}


// Update Action

export const updateAction = async ({request, params}) => {
    
    const formData = await request.formData()
    const id = params.id
    const updatedConcert = {
        lineup: formData.get("lineup"),
        flyerUrl: formData.get("flyerUrl"),
        venue: formData.get("venue"),
        price: formData.get("price"),

    }
console.log("i am here")
    await fetch(`${URL}concerts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedConcert)
    })
    return redirect(`/concerts`)
};

// Delete Action

export const deleteAction = async ({params}) => {
    
    const id = params.id
  

    await fetch(`${URL}concerts/${id}`, {
        method: "DELETE"
    })
     
     return redirect("/")
};