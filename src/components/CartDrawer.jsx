import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, Ticket } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0); // decimal representation, e.g. 0.20 for 20%
  const [promoApplied, setPromoApplied] = useState(false);
  const [shippingOption, setShippingOption] = useState('standard'); // 'standard' (free) or 'express' ($15.00)
  
  // Checkout simulation states
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'processing', 'completed'
  const [orderNumber, setOrderNumber] = useState('');

  const shippingCost = shippingOption === 'express' ? 15.00 : 0.00;
  const subtotal = getCartTotal();
  const discountAmount = subtotal * promoDiscount;
  const total = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'APEX20') {
      setPromoDiscount(0.20);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code! Try "APEX20" for 20% off.');
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Step 1: Processing
    setCheckoutStep('processing');
    
    // Step 2: Simulate network lag and complete
    setTimeout(() => {
      const generatedOrderNum = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrderNum);
      setCheckoutStep('completed');
      clearCart();
      setPromoApplied(false);
      setPromoDiscount(0);
      setPromoCode('');
    }, 2000);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    // Reset checkout step if completed
    if (checkoutStep === 'completed') {
      setCheckoutStep('cart');
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      {/* Backdrop click closer */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Drawer Body */}
      <div className="glassmorphism relative z-10 flex h-full w-full max-w-md flex-col border-l border-slate-800 bg-slate-950 shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2 font-orbitron text-sm font-bold text-white">
            <ShoppingBag className="h-5 w-5 text-cyber-neon-cyan" />
            Tactical Inventory
          </div>
          <button
            onClick={handleClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-900 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Panel (Conditional by Step) */}
        {checkoutStep === 'cart' && (
          <>
            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                  <ShoppingBag className="h-16 w-16 text-slate-700 stroke-[1.5]" />
                  <div>
                    <h4 className="font-orbitron text-sm font-bold text-white">Inventory Empty</h4>
                    <p className="text-xs text-slate-500 font-outfit mt-1">Select and equip some gear to start.</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyber-cyan hover:text-cyber-neon-cyan px-6 py-2.5 font-orbitron text-2xs font-bold uppercase tracking-wider text-slate-300 transition-all duration-200"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-xl border border-slate-900 bg-slate-950 p-4 transition-colors duration-150 hover:border-slate-800"
                  >
                    {/* Item Description */}
                    <div className="flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h4 className="font-orbitron text-2xs font-bold text-white leading-snug">
                          {item.name}
                        </h4>
                        
                        {/* Customization specs badges */}
                        {item.customization && (
                          <div className="mt-1.5 flex flex-wrap gap-1">
                            {Object.entries(item.customization).map(([key, val]) => (
                              <span
                                key={key}
                                className="rounded bg-slate-900 px-1.5 py-0.5 font-outfit text-4xs font-medium text-slate-400 border border-slate-850"
                              >
                                {key}: {val}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Quantity Controls and Price */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-slate-900 rounded-lg bg-slate-950 h-8 px-1.5 font-orbitron">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.customization)}
                            className="px-1 text-slate-400 hover:text-white"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-2xs text-white font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.customization)}
                            className="px-1 text-slate-400 hover:text-white"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-orbitron text-xs font-bold text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.customization)}
                      className="text-slate-600 hover:text-cyber-pink shrink-0 self-start p-1"
                      title="Remove gear"
                    >
                      <Trash2 className="h-4.5 w-4.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Calculator */}
            {cart.length > 0 && (
              <div className="border-t border-slate-900 bg-slate-950 p-6 flex flex-col gap-4">
                
                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Ticket className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                    <input
                      type="text"
                      placeholder="PROMO CODE (APEX20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      className="w-full rounded-xl border border-slate-900 bg-slate-950 py-2 pl-10 pr-4 font-orbitron text-2xs text-white placeholder-slate-500 outline-none focus:border-cyber-cyan disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={promoApplied}
                    className="rounded-xl border border-slate-900 bg-slate-900 px-4 font-orbitron text-2xs font-bold uppercase tracking-wider text-slate-300 hover:bg-slate-800 disabled:bg-cyber-green/10 disabled:border-cyber-green/30 disabled:text-cyber-neon-green"
                  >
                    {promoApplied ? 'APPLIED' : 'APPLY'}
                  </button>
                </form>

                {/* Shipping Selection */}
                <div className="grid grid-cols-2 gap-2 text-left font-outfit">
                  <button
                    onClick={() => setShippingOption('standard')}
                    className={`rounded-xl border p-2.5 flex flex-col gap-0.5 transition-all ${
                      shippingOption === 'standard'
                        ? 'border-cyber-cyan bg-cyber-cyan/5 text-white'
                        : 'border-slate-900 bg-slate-950 text-slate-500'
                    }`}
                  >
                    <span className="text-2xs font-bold font-orbitron">STANDARD</span>
                    <span className="text-[10px]">Free (3-5 days)</span>
                  </button>
                  <button
                    onClick={() => setShippingOption('express')}
                    className={`rounded-xl border p-2.5 flex flex-col gap-0.5 transition-all ${
                      shippingOption === 'express'
                        ? 'border-cyber-cyan bg-cyber-cyan/5 text-white'
                        : 'border-slate-900 bg-slate-950 text-slate-500'
                    }`}
                  >
                    <span className="text-2xs font-bold font-orbitron">EXPRESS</span>
                    <span className="text-[10px]">$15.00 (Overnight)</span>
                  </button>
                </div>

                {/* Prices list */}
                <div className="flex flex-col gap-2 border-t border-slate-900 pt-4 font-outfit text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-orbitron font-medium text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-cyber-neon-green">
                      <span>Discount (20% off)</span>
                      <span className="font-orbitron font-medium">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-orbitron font-medium text-white">
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-900 pt-2.5 text-sm font-bold text-white">
                    <span>Total Bill</span>
                    <span className="font-orbitron text-base font-black text-cyber-neon-cyan text-glow-cyan">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-green py-3.5 font-orbitron text-xs font-bold uppercase tracking-wider text-cyber-bg-dark transition-all duration-300 hover:scale-102 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-98"
                >
                  <ShieldCheck className="h-4.5 w-4.5" />
                  Secure Tactical Checkout
                </button>
              </div>
            )}
          </>
        )}

        {/* Processing step */}
        {checkoutStep === 'processing' && (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 text-center">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-slate-800 border-t-cyber-cyan animate-spin" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-orbitron text-sm font-bold text-white uppercase tracking-wider">
                Verifying Transaction
              </h3>
              <p className="text-xs text-slate-500 font-outfit">
                Syncing secure payment keys with Apex networks...
              </p>
            </div>
          </div>
        )}

        {/* Completed step */}
        {checkoutStep === 'completed' && (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-neon-green shadow-[0_0_20px_rgba(0,255,135,0.2)]">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-orbitron text-base font-black text-white uppercase tracking-widest text-glow-green">
                ORDER SECURED
              </h3>
              <p className="text-xs text-slate-400 font-outfit max-w-xs">
                Championship gear successfully dispatched. Welcome to the elite roster, Athlete.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-850 p-4 rounded-xl w-full max-w-xs text-left font-outfit text-xs">
              <div className="flex justify-between border-b border-slate-850/60 pb-2 mb-2 text-slate-500">
                <span>Receipt Number</span>
                <span className="font-orbitron font-bold text-white">{orderNumber}</span>
              </div>
              <p className="text-4xs uppercase font-orbitron tracking-widest text-slate-500">Status</p>
              <p className="text-2xs font-bold text-cyber-neon-green font-orbitron flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyber-neon-green animate-ping" />
                DISPATCHED / EN ROUTE
              </p>
            </div>

            <button
              onClick={handleClose}
              className="rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-green px-8 py-3 font-orbitron text-xs font-bold uppercase tracking-wider text-cyber-bg-dark transition-all duration-200 hover:scale-103 active:scale-97"
            >
              Continue Mission
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
