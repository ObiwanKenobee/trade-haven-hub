import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const listings = [
  {
    id: 1,
    title: "Premium Coffee Beans",
    location: "Ethiopia",
    quantity: "5,000 kg",
    price: "$12,500",
    trustScore: 98,
    type: "sale",
    seller: "Ethiopian Coffee Co-op",
  },
  {
    id: 2,
    title: "Organic Cotton",
    location: "Tanzania",
    quantity: "2,000 kg",
    price: "$8,200",
    trustScore: 95,
    type: "sale",
    seller: "Tanzania Textile Union",
  },
  {
    id: 3,
    title: "Raw Cocoa Beans",
    location: "Ghana",
    quantity: "3,500 kg",
    price: "$15,750",
    trustScore: 97,
    type: "sale",
    seller: "Ghana Cocoa Board",
  },
];

export const MarketplaceListings = () => {
  return (
    <div className="space-y-4">
      {listings.map((listing) => (
        <Card key={listing.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-xl">{listing.title}</CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Package className="h-4 w-4" />
                <span>{listing.location}</span>
                <Badge variant="secondary">{listing.type}</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">
                Trust Score: {listing.trustScore}%
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <p className="text-sm font-medium">Quantity</p>
                <p className="text-2xl font-bold">{listing.quantity}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Price</p>
                <p className="text-2xl font-bold">{listing.price}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">{listing.seller}</p>
              <Button>View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};