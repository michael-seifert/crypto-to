import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Link, Settings, DollarSign, ArrowRight } from "lucide-react";

export const Merchant = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Start Accepting <span className="text-brand-gradient">Crypto Payments</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Get paid in Bitcoin, Ethereum, and USDC. Receive USD in your bank account.
          </p>
        </div>

        {/* Setup Flow */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-gradient rounded-full text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                Business Information
              </CardTitle>
              <CardDescription>
                Set up your merchant account and business details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="business">Business Name</Label>
                <Input id="business" placeholder="Your Business Name" />
              </div>
              <div>
                <Label htmlFor="email">Business Email</Label>
                <Input id="email" type="email" placeholder="business@company.com" />
              </div>
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" placeholder="https://yourstore.com" />
              </div>
              <Button className="w-full bg-brand-gradient hover:opacity-90">
                Continue Setup
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-gradient rounded-full text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                Bank Account
              </CardTitle>
              <CardDescription>
                Connect your bank account for USD settlements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-dashed border-muted-foreground rounded-lg text-center">
                <DollarSign className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with Plaid for secure bank linking
                </p>
                <Button variant="outline" className="w-full">
                  <Link className="w-4 h-4 mr-2" />
                  Connect Bank Account
                </Button>
              </div>
              <div className="text-xs text-muted-foreground">
                <CheckCircle className="w-3 h-3 inline mr-1" />
                Bank-level security with 256-bit encryption
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crypto Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-gradient rounded-full text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              Choose Accepted Cryptocurrencies
            </CardTitle>
            <CardDescription>
              Select which cryptocurrencies you want to accept
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ₿
                  </div>
                  <span className="font-semibold">Bitcoin</span>
                  <Badge variant="secondary">BTC</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  The original cryptocurrency
                </p>
              </div>

              <div className="p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    Ξ
                  </div>
                  <span className="font-semibold">Ethereum</span>
                  <Badge variant="secondary">ETH</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Smart contract platform
                </p>
              </div>

              <div className="p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    $
                  </div>
                  <span className="font-semibold">USDC</span>
                  <Badge variant="secondary">USDC</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  USD-backed stablecoin
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-gradient rounded-full text-white flex items-center justify-center text-sm font-bold">
                4
              </div>
              Integration Options
            </CardTitle>
            <CardDescription>
              Choose how to integrate PSQ/PAY with your store
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <Settings className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Hosted Checkout</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Redirect customers to our secure payment page
                </p>
                <Button variant="outline" size="sm">
                  Get Link
                </Button>
              </div>

              <div className="text-center p-6 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <Link className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Plugin</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Easy integration for WooCommerce, Shopify
                </p>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>

              <div className="text-center p-6 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <ArrowRight className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">API Keys</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Custom integration with our REST API
                </p>
                <Button variant="outline" size="sm">
                  Get Keys
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Setup takes less than 5 minutes • Get USD in your bank within T+1 to T+2 days
          </p>
          <Button size="lg" className="bg-brand-gradient hover:opacity-90">
            Complete Merchant Setup
          </Button>
        </div>
      </div>
    </div>
  );
};