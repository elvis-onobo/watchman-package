import axios from 'axios'

class Watchman {
    key
    environment
    constructor(apikey, env){
        this.key = apikey
        this.environment = env
    }

    async capture(error) {
        try {
            if(!this.key || this.key.length < 1) throw new Error("Your project API key is required")
            if(!this.environment || this.environment.length < 1) throw new Error("Your project's development environment is required")
            return await axios.post('https://app.trywatchman.com/api/error', {
                environment: this.environment,
                error
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.key}`,
                },
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default Watchman