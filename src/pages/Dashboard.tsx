import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  CreditCard, 
  Users, 
  Download,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from "lucide-react";

export const Dashboard = () => {
  const transactions = [
    { id: "1", amount: "$245.67", crypto: "0.0067 BTC", status: "completed", customer: "john@example.com", time: "2 min ago" },
    { id: "2", amount: "$89.99", crypto: "0.0421 ETH", status: "pending", customer: "sarah@store.com", time: "5 min ago" },
    { id: "3", amount: "$156.33", crypto: "156.33 USDC", status: "completed", customer: "mike@business.co", time: "12 min ago" },
    { id: "4", amount: "$78.21", crypto: "0.0021 BTC", status: "failed", customer: "alex@company.io", time: "1 hour ago" },
    { id: "5", amount: "$299.99", crypto: "0.1242 ETH", status: "completed", customer: "lisa@startup.com", time: "2 hours ago" },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor your crypto payment performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button className="bg-brand-gradient hover:opacity-90">
            <ExternalLink className="w-4 h-4 mr-2" />
            API Docs
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,847.33</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1 text-green-500" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,247</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1 text-green-500" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="w-3 h-3 mr-1 text-red-500" />
              -2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,429</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1 text-green-500" />
              +8.3% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settlements">Settlements</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                Latest crypto payments received by your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div>
                        <div className="font-medium">{tx.amount}</div>
                        <div className="text-sm text-muted-foreground">{tx.crypto}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tx.customer}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={
                        tx.status === "completed" ? "default" :
                        tx.status === "pending" ? "secondary" : "destructive"
                      }>
                        {tx.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {tx.time}
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Distribution by cryptocurrency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>Bitcoin (BTC)</span>
                    </div>
                    <span className="font-medium">45.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span>Ethereum (ETH)</span>
                    </div>
                    <span className="font-medium">38.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span>USDC</span>
                    </div>
                    <span className="font-medium">16.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Payments by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>North America</span>
                    <span className="font-medium">52.3%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Europe</span>
                    <span className="font-medium">28.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Asia Pacific</span>
                    <span className="font-medium">14.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Other</span>
                    <span className="font-medium">4.6%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settlements">
          <Card>
            <CardHeader>
              <CardTitle>Settlement History</CardTitle>
              <CardDescription>
                USD settlements to your connected bank account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div>
                      <div className="font-medium">$1,247.89</div>
                      <div className="text-sm text-muted-foreground">Bank Transfer</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">Completed</Badge>
                    <div className="text-sm text-muted-foreground mt-1">
                      Jan 15, 2024
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div>
                      <div className="font-medium">$892.34</div>
                      <div className="text-sm text-muted-foreground">Bank Transfer</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">Processing</Badge>
                    <div className="text-sm text-muted-foreground mt-1">
                      Jan 14, 2024
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div>
                      <div className="font-medium">$2,156.78</div>
                      <div className="text-sm text-muted-foreground">Bank Transfer</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">Completed</Badge>
                    <div className="text-sm text-muted-foreground mt-1">
                      Jan 12, 2024
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};