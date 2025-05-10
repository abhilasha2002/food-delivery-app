const ContactUs=()=>{
    return (
        <div>
            <h1 className="font-bold p-4 m-4">Contact us</h1>
            <form>
            <input className="border-black border-2 m-2 rounded-lg p-2" type="text" placeholder="Name"/>
            <input className="border-black border-2 m-2 rounded-lg p-2" type="text" placeholder="Contact number"/>
            <button className=" bg-gray-100 rounded-lg  border-2 border-black p-2 cursor-pointer">Submit</button>
            </form>
        </div>
    )
}
export default ContactUs;