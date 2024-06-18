export default defineEventHandler(({ node }) => {
  console.log(
    "🚀 ~ defineEventHandler ~ node.req:",
    node.req.url?.split("/").pop()
  );
});
