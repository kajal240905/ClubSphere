import { useLocation ,useNavigate} from 'react-router-dom';
import {useEffect} from 'react'
import axios from 'axios';

export default function PaymentForm() {
  const location = useLocation();
  const fee = location.state?.fee;
  const eventName =location.state?.eventName
  console.log(eventName)
  console.log(fee)
  useEffect(() => {
    if (fee === 0) {
      freeRegister();
    }
  }, [fee]);

async function freeRegister(){
if(fee===0){
   try{
    const response=await axios.post('https://clubsphere-production.up.railway.app/login/freeRegister',
      {eventName,fee},
  {
      withCredentials:true
    }
  
)
alert("Registered Successfully")
   }
   catch(e){ 
    console.log(e)

   }
  }
}

  const handlePayment = async () => {
    try {
     
      const { data } = await axios.post('https://clubsphere-production.up.railway.app/login/createOrder', {
        amount: fee,
        event:eventName
      },
    {withCredentials:true}
  );

      
      const options = {
        key: import.meta.env.VITE_RAZORPAY_ID, 
        amount: data.amount,
        currency: "INR",
        name: "ClubSphere",
        description: "Event Registration",
        order_id: data.id,
        handler: async (response) => {
          try {
           
            const verifyRes = await axios.post('https://clubsphere-production.up.railway.app/login/verifyOrder', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              
            },
          {withCredentials:true});

            if (verifyRes.data.success) {
              alert("✅ Payment Successful 🎉 Registration confirmed");
              
            } else {
              alert("❌ Payment Verification Failed");
            }
          } catch (verifyError) {
            console.error("Verification error:", verifyError);
            alert("Error verifying payment.");
          }
        },
        prefill: {
          // Optional: Prefill user info if available
          // name: 'User Name',
          // email: 'user@example.com',
          // contact: '9999999999',
        },
        theme: {
          color: "#1e40af",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-8 text-white bg-zinc-900 w-full min-h-screen ">
    <div className="p-8 text-black rounded-xl bg-zinc-300 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 font-semibold">Confirm Payment</h2>
      <p className="text-lg mb-4">Registration Fee: ₹{fee}</p>

      <button
        onClick={handlePayment}
        className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded shadow"
      >
        Pay Now
      </button>
    </div>
    </div>
  );
}
