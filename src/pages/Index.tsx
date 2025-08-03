import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            The Future of <span className="text-brand-gradient">Crypto Payments</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Accept Bitcoin, Ethereum, and USDC. Get paid in USD. PSQ/PAY makes crypto payments simple for businesses who love freedom.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-brand-gradient hover:opacity-90">
              Start Accepting Crypto
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">₿</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Multi-Crypto Support</h3>
            <p className="text-muted-foreground">Accept Bitcoin, Ethereum, USDC and other major cryptocurrencies with automatic USD conversion.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">$</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant USD Settlement</h3>
            <p className="text-muted-foreground">Get USD deposited directly to your bank account within T+1 to T+2 business days.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
            <p className="text-muted-foreground">Bank-level security with 256-bit encryption, SOC 2 compliance, and PCI DSS certification.</p>
          </div>
        </div>

        {/* Integration Options */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Simple Integration</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Hosted Checkout</CardTitle>
                <CardDescription>Redirect customers to our secure payment page</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="bg-accent p-3 rounded text-sm block break-all">
                  https://pay.psq.dev/checkout/...
                </code>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>E-commerce Plugins</CardTitle>
                <CardDescription>One-click setup for WooCommerce, Shopify, and more</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl mb-2">🔌</div>
                <p className="text-sm text-muted-foreground">Easy installation</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>REST API</CardTitle>
                <CardDescription>Custom integration with our developer-friendly API</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="bg-accent p-3 rounded text-sm block">
                  POST /api/v1/payments
                </code>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Accept Crypto?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses who love the freedom of crypto payments
          </p>
          <Button size="lg" className="bg-brand-gradient hover:opacity-90">
            Get Started Free
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No setup fees • 2.9% processing fee • Free first $1,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
