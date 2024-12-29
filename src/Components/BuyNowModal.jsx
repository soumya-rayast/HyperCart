import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-black hover:bg-gray-600 rounded-xl"
            >
                Buy now
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
                className="fixed inset-0 flex items-center justify-center bg-black/50"
            >
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
                    <DialogBody className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Complete Your Order
                        </h3>
                        <div className="space-y-3">
                            <input
                                type="text"
                                name="name"
                                value={addressInfo.name}
                                onChange={(e) => {
                                    setAddressInfo({
                                        ...addressInfo,
                                        name: e.target.value,
                                    });
                                }}
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 bg-white border rounded-md text-black placeholder-gray-300"
                            />
                            <input
                                type="text"
                                name="address"
                                value={addressInfo.address}
                                onChange={(e) => {
                                    setAddressInfo({
                                        ...addressInfo,
                                        address: e.target.value,
                                    });
                                }}
                                placeholder="Enter your address"
                                className="w-full px-3 py-2 bg-white border rounded-md text-black placeholder-gray-300"
                            />
                            <input
                                type="number"
                                name="pincode"
                                value={addressInfo.pincode}
                                onChange={(e) => {
                                    setAddressInfo({
                                        ...addressInfo,
                                        pincode: e.target.value,
                                    });
                                }}
                                placeholder="Enter your pincode"
                                className="w-full px-3 py-2 bg-white border rounded-md text-black placeholder-gray-300"
                            />
                            <input
                                type="text"
                                name="mobileNumber"
                                value={addressInfo.mobileNumber}
                                onChange={(e) => {
                                    setAddressInfo({
                                        ...addressInfo,
                                        mobileNumber: e.target.value,
                                    });
                                }}
                                placeholder="Enter your mobile number"
                                className="w-full px-3 py-2 bg-white border rounded-md text-black placeholder-gray-300"
                            />
                        </div>
                    </DialogBody>
                    <DialogFooter className="flex justify-end space-x-2 p-4">
                        <Button
                            onClick={handleOpen}
                            variant="outlined"
                            className="border-gray-300 text-gray-700"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="bg-black text-white rounded-lg"
                        >
                            Place Order
                        </Button>
                    </DialogFooter>
                </div>
            </Dialog>
        </>
    );
};

export default BuyNowModal;
