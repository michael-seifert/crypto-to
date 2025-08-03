import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { QrCode, Copy, CheckCircle, Clock, Wallet, ExternalLink } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export const Checkout = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("eth");
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "processing" | "confirmed">("pending");

  const cryptoOptions = [
    { id: "btc", name: "Bitcoin", symbol: "BTC", icon: "₿", color: "bg-orange-500", rate: "0.0024", address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" },
    { id: "eth", name: "Ethereum", symbol: "ETH", icon: "Ξ", color: "bg-blue-600", rate: "0.0421", address: "0x742d35Cc6e6Bb53ce6BA4c8B8a29c24b" },
    { id: "usdc", name: "USDC", symbol: "USDC", icon: "$", color: "bg-green-600", rate: "100.00", address: "0x742d35Cc6e6Bb53ce6BA4c8B8a29c24b" }
  ];

  const selectedOption = cryptoOptions.find(opt => opt.id === selectedCrypto)!;

  const simulatePayment = () => {
    setPaymentStatus("processing");
    setTimeout(() => setPaymentStatus("confirmed"), 3000);
  };

  return (
    <div className="min-h-screen bg-accent/30">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <BrandLogo size="lg" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Secure Crypto Checkout</h1>
            <p className="text-muted-foreground">Complete your payment with cryptocurrency</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Demo Store Purchase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Premium Widget</span>
                  <span>$89.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Fee</span>
                  <span>$2.70</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Fee</span>
                  <span>$7.31</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>$100.00</span>
                </div>
                
                <div className="p-3 bg-accent rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Rate expires in 14:32</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Exchange rate locked to prevent price fluctuation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Payment Method</CardTitle>
                <CardDescription>Select your preferred cryptocurrency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  {cryptoOptions.map((crypto) => (
                    <div
                      key={crypto.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        selectedCrypto === crypto.id 
                          ? "border-primary bg-primary/5" 
                          : "hover:bg-accent"
                      }`}
                      onClick={() => setSelectedCrypto(crypto.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 ${crypto.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {crypto.icon}
                          </div>
                          <div>
                            <div className="font-medium">{crypto.name}</div>
                            <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{crypto.rate} {crypto.symbol}</div>
                          <div className="text-sm text-muted-foreground">≈ $100.00</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {paymentStatus === "pending" && (
                  <Button 
                    onClick={simulatePayment}
                    className="w-full bg-brand-gradient hover:opacity-90"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Pay with {selectedOption.name}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Payment Details */}
          {(paymentStatus === "processing" || paymentStatus === "confirmed") && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {paymentStatus === "processing" && <Clock className="w-5 h-5 text-yellow-500" />}
                  {paymentStatus === "confirmed" && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {paymentStatus === "processing" ? "Awaiting Payment" : "Payment Confirmed"}
                </CardTitle>
                <CardDescription>
                  {paymentStatus === "processing" 
                    ? "Send the exact amount to complete your purchase"
                    : "Your payment has been successfully processed"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {paymentStatus === "processing" && (
                  <>
                    <div className="text-center">
                      <div className="w-48 h-48 bg-white border-2 border-dashed border-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <QrCode className="w-16 h-16 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Scan QR code with your {selectedOption.name} wallet
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm font-medium">Payment Amount</Label>
                        <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                          <span className="font-mono text-lg">{selectedOption.rate} {selectedOption.symbol}</span>
                          <Button size="sm" variant="ghost">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Wallet Address</Label>
                        <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                          <span className="font-mono text-sm flex-1 truncate">{selectedOption.address}</span>
                          <Button size="sm" variant="ghost">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium text-yellow-800">Payment Processing</h4>
                          <p className="text-sm text-yellow-700">
                            Your payment is being processed. This usually takes 1-3 network confirmations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {paymentStatus === "confirmed" && (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Payment Successful!</h3>
                      <p className="text-muted-foreground mb-4">
                        Your order has been confirmed and will be processed shortly.
                      </p>
                      <Badge variant="outline" className="mb-4">
                        Transaction: 0x742d35...24b
                      </Badge>
                      <div className="flex gap-3 justify-center">
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on Explorer
                        </Button>
                        <Button>Return to Store</Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>PCI DSS Level 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Label = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <label className={`block text-sm font-medium mb-1 ${className}`}>{children}</label>
);