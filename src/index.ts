import { fromHono } from "chanfana";
import { Hono } from "hono";
import { ShipList } from "endpoints/shipList";
import { MineItemList } from "endpoints/mineItemList";
import { ResourceList } from "endpoints/resourceList";
import { SectorList } from "endpoints/sectorList";
import { FleetList } from "endpoints/fleetList";
import { TokenPriceList } from "endpoints/tokenPriceList";

// Start a Hono app
const app = new Hono();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints

openapi.get("/api/fleets", FleetList);
openapi.get("/api/mineitems", MineItemList);
openapi.get("/api/sectors", SectorList);
openapi.get("/api/ships", ShipList);
openapi.get("/api/token-prices", TokenPriceList);
openapi.get("/api/resources", ResourceList);

// Export the Hono app
export default app;
