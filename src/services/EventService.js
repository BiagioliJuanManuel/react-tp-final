export const getEvents = async (endpoint)=>{
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const events = await response.json();
        return events;
    } catch (error) {
        console.log(error);
    }
}