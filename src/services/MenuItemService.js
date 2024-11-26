import http from "../http-common.js";

class MenuItemService {
  getAllMenuItems() {
    return http.get("/menuitems");
  }
}

export default new MenuItemService();
