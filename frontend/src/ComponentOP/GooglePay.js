import React from 'react';
import { GooglePayButton } from '@google-pay/button-react';

const GooglePay = () => {
  return (
    <GooglePayButton
      environment="TEST" // Use 'PRODUCTION' when live
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA', 'RUPAY'], // Rupay is added for India
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'razorpay', // Example gateway for India
                gatewayMerchantId: 'your_razorpay_merchant_id', // Replace with actual Merchant ID
              },
            },
          },
          {
            type: 'UPI',
            parameters: {},
          },
        ],
        merchantInfo: {
          merchantId: 'your_google_pay_merchant_id', // Replace with your Google Pay merchant ID
          merchantName: 'Your Business Name',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '500.00', // Replace with your dynamic price
          currencyCode: 'INR', // Set to INR for India
          countryCode: 'IN', // Set to IN for India
        },
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log('Payment Success:', paymentRequest);
        // Handle payment success (e.g., send token to backend)
      }}
      onError={(error) => {
        console.error('Payment Error:', error);
      }}
    />
  );
};

export default GooglePay;
