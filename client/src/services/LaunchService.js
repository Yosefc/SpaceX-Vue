const axios = require("axios");
const url = "graphql";

class LaunchService {
  static singleLaunch(flightNumber) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url, {
          query: `{
                  Launch(flight_number: ${flightNumber}) {
                    flight_number
                    mission_name
                    launch_success
                    launch_date_local
                    details
                    rocket {
                      rocket_id
                      rocket_type
                    }
                    links {
                      mission_patch
                      wikipedia
                    }
                  }
                }`
        });
        resolve(res.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  static allLaunches() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post(url, {
          query: `{
              Launches {
                flight_number
                mission_name
                launch_year
                launch_date_local
                launch_success
                details
              }
            }`
        });
        resolve(result.data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default LaunchService;
