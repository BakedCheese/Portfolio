import axios from "axios";

export const updateOrdersPara = async (theMovingParagraph) => {
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

export const updateOrdersPic = async (theMovingPicture) => {
  const response = await axios.get(`https://bakedcheese.nl/webserver/pictures`);

  response.data.forEach(async (pic) => {
    if (pic.paragraph_id == theMovingPicture.paragraph_id) {
      if (pic.order_in_paragraph > theMovingPicture.order_in_paragraph) {
        console.log(theMovingPicture.order_in_paragraph);
        await axios.put(`https://bakedcheese.nl/webserver/pictures/${pic.id}`, {
          order_in_paragraph: pic.order_in_paragraph - 1,
        });
      }
    }
  });
};
