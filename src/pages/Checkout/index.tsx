import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import useStyles from "./index.styles";
import { useAppSelector } from "../../store/hooks";
import { CartItems, CartItemsCount, CartLoading } from "../../store/Cart/CartSlice";
import Item from "./Item";

enum ShippingArea {
  westBank = "westBank",
  abuGhosh = "abuGhosh",
  jerusalem = "jerusalem",
  occupiedAreas = "occupiedAreas"
}

const shippingPrice = {
  [ShippingArea.westBank]: 20,
  [ShippingArea.abuGhosh]: 30,
  [ShippingArea.jerusalem]: 30,
  [ShippingArea.occupiedAreas]: 60
};

const Checkout = () => {
  const [info, setInfo] = useState({
    sum: 0,
    phoneNumber: "",
    country: "palestine",
    firstName: "",
    lastName: "",
    area: "",
    address: "",
    city: "",
    postal: "",
    shippingArea: ShippingArea.westBank,
    paymentMethod: "COD"
  });
  const [errors, setErrors] = useState({
    phoneNumber: false,
    firstName: false,
    lastName: false,
    area: false,
    address: false,
    city: false
  });
  const { classes } = useStyles();
  const cartItems = useAppSelector(CartItems);
  const cartItemsCount = useAppSelector(CartItemsCount);
  const cartLoading = useAppSelector(CartLoading);

  const calculateSum = () => {
    return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };
  useEffect(() => {
    setInfo({ ...info, sum: calculateSum() + shippingPrice[info.shippingArea as ShippingArea] });
  }, [cartItems, info.shippingArea]);

  const validateFields = () => {
    const newErrors = {
      phoneNumber: !info.phoneNumber.trim(),
      firstName: !info.firstName.trim(),
      lastName: !info.lastName.trim(),
      area: !info.area.trim(),
      address: !info.address.trim(),
      city: !info.city.trim()
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((hasError) => hasError);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validateFields()) {
      console.log("Order submitted: ", info);
      setInfo({
        sum: 0,
        phoneNumber: "",
        country: "palestine",
        firstName: "",
        lastName: "",
        area: "",
        address: "",
        city: "",
        postal: "",
        shippingArea: ShippingArea.westBank,
        paymentMethod: "COD"
      });
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.checkoutBody}>
        <Box className={classes.checkoutFormPanel}>
          <Box>
            <FormControl fullWidth>
              <Typography className={classes.sectionTag}>معلومات الإتصال</Typography>
              <TextField
                id="phone-number"
                label="رقم الهاتف مع المقدمة كما في واتساب مثال : **** *** *05 972+"
                value={info.phoneNumber}
                error={errors.phoneNumber}
                helperText={errors.phoneNumber ? "هذا الحقل مطلوب" : ""}
                fullWidth
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setInfo({ ...info, phoneNumber: event.target.value });
                }}
              />
              <Typography className={classes.sectionTag}>Delivery</Typography>

              <Grid container spacing={2}>
                <Grid size={12}>
                  <FormControl fullWidth>
                    <InputLabel id="country-select-label">الدولة</InputLabel>
                    <Select
                      labelId="country-select-label"
                      id="country-select"
                      value={info.country}
                      label="الدولة"
                      onChange={(event: SelectChangeEvent) => {
                        setInfo({ ...info, country: event.target.value });
                      }}
                    >
                      <MenuItem value={"palestine"}>الأراضي الفلسطينية</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={6}>
                  <TextField
                    id="first-name"
                    label="الاسم الأول (بالعربي)"
                    value={info.firstName}
                    error={errors.firstName}
                    helperText={errors.firstName ? "هذا الحقل مطلوب" : ""}
                    fullWidth
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setInfo({ ...info, firstName: event.target.value });
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    id="last-name"
                    label="الاسم الأخير (بالعربي)"
                    value={info.lastName}
                    error={errors.lastName}
                    helperText={errors.lastName ? "هذا الحقل مطلوب" : ""}
                    fullWidth
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setInfo({ ...info, lastName: event.target.value });
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    id="area"
                    label="القرية / المخيم / المنطقة"
                    value={info.area}
                    error={errors.area}
                    helperText={errors.area ? "هذا الحقل مطلوب" : ""}
                    fullWidth
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setInfo({ ...info, area: event.target.value });
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    id="address"
                    label="العنوان بالتفصيل"
                    value={info.address}
                    error={errors.address}
                    helperText={errors.address ? "هذا الحقل مطلوب" : ""}
                    fullWidth
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setInfo({ ...info, address: event.target.value });
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    id="city"
                    label="المدينة"
                    value={info.city}
                    error={errors.city}
                    helperText={errors.city ? "هذا الحقل مطلوب" : ""}
                    fullWidth
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setInfo({ ...info, city: event.target.value });
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    id="postal-code"
                    label="Postal code (optional)"
                    value={info.postal}
                    fullWidth
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setInfo({ ...info, postal: event.target.value });
                    }}
                  />
                </Grid>
              </Grid>
              <Typography className={classes.sectionTag}>منطقة الشحن</Typography>
              <RadioGroup
                aria-labelledby="shippingArea"
                name="shippingArea"
                value={info.shippingArea}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setInfo({ ...info, shippingArea: event.target.value as ShippingArea });
                }}
              >
                <FormControlLabel value={ShippingArea.westBank} control={<Radio />} label=" كافة مناطق الضفة" />
                <FormControlLabel value={ShippingArea.abuGhosh} control={<Radio />} label="أبو غوش" />
                <FormControlLabel value={ShippingArea.jerusalem} control={<Radio />} label="القدس " />
                <FormControlLabel value={ShippingArea.occupiedAreas} control={<Radio />} label="الداخل المحتل" />
              </RadioGroup>
              <Typography className={classes.sectionTag}>الدفع</Typography>
              <RadioGroup
                aria-labelledby="paymentMethod"
                name="paymentMethod"
                value={info.paymentMethod}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setInfo({ ...info, paymentMethod: event.target.value });
                }}
              >
                <FormControlLabel value="COD" control={<Radio />} label="الدفع عند الإستلام (COD)" />
              </RadioGroup>
              <Button
                type="submit"
                variant="contained"
                className={classes.submitButton}
                onClick={handleSubmit}
                disabled={cartLoading}
              >
                إكمال الطلب
              </Button>
            </FormControl>
          </Box>
        </Box>
        <Box className={classes.checkoutItemsPanel}>
          {cartItems.map((item, index) => (
            <Item key={index} item={item} />
          ))}
          <Box className={classes.checkoutDetailsBox}>
            <Typography className={classes.checkoutDetails}> {`(${cartItemsCount})items Subtotal `} </Typography>
            <Typography className={classes.checkoutDetails}>{calculateSum() + " شيكل"}</Typography>
          </Box>
          <Box className={classes.checkoutDetailsBox}>
            <Typography className={classes.checkoutDetails}> {`الشحن`} </Typography>
            <Typography className={classes.checkoutDetails}>
              {shippingPrice[info.shippingArea as ShippingArea] + " شيكل"}
            </Typography>
          </Box>
          <Box className={classes.checkoutDetailsBox}>
            <Typography className={classes.checkoutDetailsSum}> {`المجموع`} </Typography>
            <Typography className={classes.checkoutDetailsSum}>
              {calculateSum() + shippingPrice[info.shippingArea as ShippingArea] + " شيكل"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
