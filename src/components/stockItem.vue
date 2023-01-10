        <template>
          <div>
            <h1 class="text-center">UNIVERSAL MARKETING CO., LTD</h1>
            <hr>
            <h2 class="text-center">Stock Items - Click To View Items</h2>
            <div class="center">
              <button name="stockList">Produce List</button>
            </div>
            <br>
            <br>
            <div>
              <table>
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Supplier</th>
                  <th>Quantity Sold</th>
                  <th>Cost</th>
                  <th>Selling Price</th>
                  <th>Quantity in Stock</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in produce" v-bind:key="item.stockItemId">
                  <td>{{ item.stockItemId }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.supplierName }}</td>
                  <td>{{ item.quantitySold }}</td>
                  <td>{{ item.costPrice }}</td>
                  <td>{{ item.sellingPrice }}</td>
                  <td>{{ item.quantityInStock }}</td>
                  <td>
                    <button name="stockDetails" @click="detailsClicked(item.stockItemId)">
                      Details
                    </button>
                  </td>
                  <td>
                    <button name="delete" @click="deleteItemById(item.stockItemId)">
                      Delete
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </template>

        <script>
          import axios from "axios";

          export default {
            name: "stockItem",
            data() {
              return {
                produce: []
              };
            },
            async beforeMount() {
              await this.getItems();
            },
            methods: {
              async getItems() {
                try {
                  const response = await axios.get("http://localhost:8080/stocks");
                  this.produce = response.data;
                } catch (error) {
                  console.error(error);
                }
              },
              async detailsClicked(stockItemId) {
                try {
                  localStorage.setItem("var1", stockItemId);
                  this.$router.push(`/stock/stockItemDetails`);
                } catch (error) {
                  console.error(error);
                }
              },
              async deleteItemById(stockItemId) {
                try {
                  const response = await axios.delete(
                      `http://localhost:8080/stocks/${stockItemId}`
                  );
                  this.produce = response.data;
                } catch (error) {
                  console.error(error);
                }
              }
            }
          };
        </script>

        <style scoped>
        </style>