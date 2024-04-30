export default function getListStudentIds(alex) {
    if (Array.isArray(alex)) {
      return alex.map((arg) => alex.id);
    }
    return [];
}
  