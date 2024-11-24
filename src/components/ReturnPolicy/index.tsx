import { Box, List, ListItem, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import useStyles from "./index.styles";

const ReturnPolicyPopup = () => {
  const { classes } = useStyles();

  const handlePopupClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <Box className={classes.policyContainer} onClick={handlePopupClick}>
      <Typography className={classes.policyTitle}>سياسة الإرجاع</Typography>

      <List className={classes.policyList}>
        <ListItem>
          <Typography className={classes.policyText}>
            {`يتم تقديم طلب الإرجاع خلال مدة لا تتجاوز يوم من لحظة استلام الطلب شرط وجود خلل أو عيب في المنتج. و لن يتم
            الأخذ بعين الاعتبار أي من الطلبات المرسلة بعد مرور يوم على الاستلام.`}
          </Typography>
        </ListItem>

        <ListItem>
          <Typography className={classes.policyText}>
            {`لن يكون هناك رسوم ارجاع في حالة وجود أي خلل في القطع أو اختلاف في المنتج`}
          </Typography>
        </ListItem>

        <ListItem>
          <Typography className={classes.policyText}>
            {`يجب أن يكون المنتج المراد إرجاعه في نفس الحالة التي تم استلامه بها مع كامل أغراضه (العلبة الغلاف ... إلخ )
            ولم يتم استخدامه، المنتج الذي تم استخدامه ولا يزال عليه بطاقة السعر يعتبر كمنتج مستخدم ولا يمكن إرجاعه.`}
          </Typography>
        </ListItem>

        <ListItem>
          <Typography className={classes.policyText}>
            {` يجب أن يكون المنتج المراد إرجاعه في نفس الطرد أو الغلاف الذي تم استلامه فيه`}
          </Typography>
        </ListItem>

        <ListItem>
          <Typography className={classes.policyText}>
            {`لا يسمح بإرجاع أكثر من ثلاثة للطلبات التي تحتوي على عشرة منتجات أو أكثر.`}
          </Typography>
        </ListItem>
      </List>

      <Typography className={classes.policyTitle}>كيف يمكنني إرجاع أو تبديل المنتج؟</Typography>
      <Typography className={classes.policyText}>
        {`تواصل معنا عبر الواتساب وقدم طلب إرجاع او تبديل للمنتج ليرد عليك أحد موظفين خدمة العملاء`}
      </Typography>
      <List className={classes.policyList}>
        <ListItem>
          <Typography className={classes.policyText}>
            {`سيتم دراسة طلب الإرجاع من قبل خدمة العملاء والرد عليك خلال يوم من تقديم الطلب.`}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.policyText}>
            {`  يجب إرفاق ثلاث صور للمنتج المراد إرجاعه داخل طلب الإرجاع ) صورة أماميه، خلفية، العلامة التجارية).`}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.policyText}>
            {` إرسال المنتج المراد إرجاعه من خلال شركة التوصيل ، وسيقوم الفريق بمساعدتك والرد على أي استفسار.`}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.policyText}>
            {`  عند الانتهاء من فحص المنتج الراجع وبعد الموافقة عليه سيتم إرسال قيمة الشرائية للمنتج إلى نفس العنوان الذي
            قمت باستخدامه ونفس معلومات الاتصال.`}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.policyText}>
            {`التبديل يكون على الحقائب او المحافظ "القطع الغير قابلة للكسر" لا يتم تبديل الساعات الا في حال وصولها عند
            المستلم مكسورة.`}
          </Typography>
        </ListItem>
      </List>
      <Typography className={classes.policyText}>
        {`فريق خدمة العملاء لدينا على جاهزية تامة لمساعدتك، وسوف يسعد بخدمتك:`}
      </Typography>
      <Typography className={classes.policyText}>{`إنستغرام: Lady90s`}</Typography>
      <Typography className={classes.policyText}>
        {`البريد الإلكتروني: support@lady90s.com
`}
      </Typography>
      <Typography className={classes.policyText}>
        {`رقم الواتساب : 00970XXXXXXX
`}
      </Typography>
    </Box>
  );
};

export default ReturnPolicyPopup;
