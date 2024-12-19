
export const getUsers = async (endpoint)=>{
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error);
    }
}