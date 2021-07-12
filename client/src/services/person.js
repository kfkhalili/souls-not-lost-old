import axios from "axios";

const API_URL = "http://localhost:5001/api/person";

class PersonService {
  async create(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("birth", data.birth);
    formData.append("death", data.death);
    formData.append("nationality", data.nationality);
    formData.append("occupation", data.occupation);
    formData.append("causeOfDeath", data.causeOfDeath);
    formData.append("url", data.url);
    formData.append("picture", data.picture[0]);
    axios({
      method: "POST",
      url: API_URL,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => alert(JSON.stringify(res.json())))
      .catch((error) => alert(JSON.stringify(error.message)));
  }
}

export default new PersonService();
