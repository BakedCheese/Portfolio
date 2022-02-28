<template>
  <img
    v-if="!this.check"
    @click="onCheck"
    src="../../../assets/icon/trash.svg"
    alt="Goto"
  />
  <div class="check" v-else>
    <div class="okay" @click="Delete">Delete</div>
    <div class="no" @click="onCheck">Cancel</div>
  </div>
</template>

<script>
import axios from "axios";
import {
  updateOrdersPara,
  updateOrdersPic,
} from "../../../scripts/updateOrder.js";
export default {
  props: ["item", "id"],
  data() {
    return {
      check: false,
      thisItem: null,
    };
  },
  methods: {
    onCheck() {
      this.check = !this.check;
    },

    async Delete() {
      const responseItems = await axios.get(
        `https://bakedcheese.nl/webserver/${this.$props.item}/${this.$props.id}`
      );

      this.thisItem = responseItems.data;
      console.log(this.thisItem);

      await axios.delete(
        `https://bakedcheese.nl/webserver/${this.$props.item}/${this.$props.id}`
      );

      try {
        switch (this.$props.item) {
          case "paragraphs":
            {
              updateOrdersPara(this.thisItem);

              const responseProject = await axios.get(
                `https://bakedcheese.nl/webserver/projects/${this.thisItem.project_id}`
              );

              this.HasPictures(responseProject.data.collection_id);
            }
            break;
          case "pictures":
            {
              updateOrdersPic(this.thisItem);

              const responseParagraph = await axios.get(
                `https://bakedcheese.nl/webserver/paragraphs/${this.thisItem.paragraph_id}`
              );

              const responseProject = await axios.get(
                `https://bakedcheese.nl/webserver/projects/${responseParagraph.data.project_id}`
              );

              this.HasPictures(responseProject.data.collection_id);
            }
            break;
          default:
            break;
        }
      } catch (err) {
        console.log(err.message);
      }
    },

    async HasPictures(id) {
      //getting all the projects
      const responseProjects = await axios.get(
        `https://bakedcheese.nl/webserver/projects`
      );

      //going through all the projects
      for (let j = 0; j < responseProjects.data.length; j++) {
        //checking in the project list if there is a project with the same id
        if (responseProjects.data[j].collection_id == id) {
          //getting all the paragraphs
          const responseParagraphs = await axios.get(
            `https://bakedcheese.nl/webserver/paragraphs`
          );
          //going through all the paragraphs
          for (let i = 0; i < responseParagraphs.data.length; i++) {
            //checking in the paragraphs list if there is a paragraph with the same id
            if (
              responseParagraphs.data[i].project_id ==
              responseProjects.data[j].id
            ) {
              //getting all the pictures
              const responsePictures = await axios.get(
                `https://bakedcheese.nl/webserver/pictures`
              );
              //going through all the pictures
              for (let x = 0; x < responsePictures.data.length; x++) {
                //checking in the pictures list if there is a pictures with the same id
                if (
                  responsePictures.data[x].paragraph_id ==
                  responseParagraphs.data[i].id
                ) {
                  //Setting true or false for has_picture
                  //Return out of the methodes

                  await axios.put(
                    `https://bakedcheese.nl/webserver/collections/${id}`,
                    {
                      has_picture: true,
                    }
                  );

                  return;
                }
              }
            }
          }
        }
      }

      await axios.put(`https://bakedcheese.nl/webserver/collections/${id}`, {
        has_picture: false,
      });
    },
  },
};
</script>

<style scoped>
.check {
  display: flex;
  text-align: center;
  margin-left: 10px;
}
.check div {
  padding-top: 3px;
  width: 80px;
  height: 34px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
}

.check div:hover {
  box-shadow: rgba(0, 0, 0, 0) 0px 3px 6px;
}

.okay {
  background-color: #feca57;
  margin-right: 10px;
}

.no {
  background-color: #48dbfb;
}
</style>
