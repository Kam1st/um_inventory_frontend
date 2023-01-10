import * as http from "http";

class StockItemService {
    getAll() {
        return http.get('/stock');
    }

    getStockItem(stockItemId) {
        return http.get(`/stock/${stockItemId}`);
    }

    deleteStockItem(stockItemId) {
        return http.delete(`/stock/${stockItemId}`);
    }
}

export default new StockItemService();