import { Box, TextField, Typography, Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function TimeSlotOptionItem({
  slot,
  onChange,
  checked,
  onToggle,
}) {
  return (
    <Box
      sx={{
        mt: 1.5,
        mb: 1.5,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* 시작 시간 */}
      <TextField
        type="time"
        value={slot.startTime}
        onChange={(e) => onChange(slot.id, "startTime", e.target.value)}
        size="small"
        sx={{
          width: { xs: 120, sm: 130, md: 180 },
          "& .MuiOutlinedInput-root": { borderRadius: "8px" },
        }}
        inputProps={{ step: 600 }}
      />

      <Typography variant="body1" fontWeight={500}>
        ~
      </Typography>

      {/* 종료 시간 */}
      <TextField
        type="time"
        value={slot.endTime}
        onChange={(e) => onChange(slot.id, "endTime", e.target.value)}
        size="small"
        sx={{
          width: { xs: 120, sm: 130, md: 180 },
          "& .MuiOutlinedInput-root": { borderRadius: "8px" },
        }}
        inputProps={{ step: 600 }}
      />

      {/* 체크박스 */}
      <Checkbox
        checked={checked}
        onChange={() => onToggle(slot.id)}
        sx={{ ml: "auto" }}
      />
    </Box>
  );
}
