import axios from "axios";

export const updateOrders = async (theMovingParagraph) => {
  const response = await axios.get(
    `https://bakedcheese.nl/webserver/paragraphs`
  );

  response.data.forEach(async (para) => {
    if (para.project_id == theMovingParagraph.project_id) {
      if (para.order_in_project > theMovingParagraph.order_in_project) {
        await axios.put(
          `https://bakedcheese.nl/webserver/paragraphs/${para.id}`,
          {
            order_in_project: para.order_in_project - 1,
          }
        );
      }
    }
  });
};
