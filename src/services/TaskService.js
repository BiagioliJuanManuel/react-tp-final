export const getTasks = async (endpoint)=>{
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const tasks = await response.json();
        return tasks;
    } catch (error) {
        console.log(error);
    }
}