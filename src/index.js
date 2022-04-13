export default function vitalStatus(param) {
    if (param.health) {
        return "health";
    }
    if (param.wounded) {
        return "wounded";
    }
    if (param.critical) {
        return "critical";
   }
}