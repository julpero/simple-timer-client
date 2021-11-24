import http from "../http-common";

class TimerDataService {
  getAll() {
    return http.get("/timers");
  }

  get(id: number) {
    return http.get(`/timers/${id}`);
  }

  create(data: any) {
    return http.post("/timers", data);
  }

  update(id: number, data: any) {
    return http.put(`/timers/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/timers/${id}`);
  }

  deleteAll() {
    return http.delete(`/timers`);
  }

  findByTitle(title: string) {
    return http.get(`/timers?title=${title}`);
  }
}

export default new TimerDataService();