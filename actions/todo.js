"use server"

import { cache, use } from "react"

// Rules of Creating Server Actions //

//use server
//async
//revalidateTag/Cache or redirect

export async function createTodo(todoTitle) {
    console.log("Ran on server")

    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: 'POST',
        body: JSON.stringify({title: todoTitle,
            completed: false,
            userId: 1,
            completed: false,
            id: 99
        }),
    })

    return await res.json()
}

export async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        // next: {
        // revalidate: 20
        //}
        //cache: "no-store"
})

    return await res.json()
}
