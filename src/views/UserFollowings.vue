<template>
  <div class="UserSelfContainer">
    <Navbar id="Navbar" />
    <div class="UserFollowingsMain">
      <div class="userTitle">
        <router-link
          :to="{ name: 'user-other', params: { id: user.id, type: 'tweets' } }"
        >
          <img class="backIcon" src="../assets/Vector.png" alt="" />
        </router-link>
        <div class="userInfo">
          <h1 class="infoName">{{ user.name }}</h1>
          <span class="infoTweetsNumber">{{ currentTweets.length }}則推文</span>
        </div>
      </div>
      <!-- tabs -->
      <ul class="tabs">
        <li>
          <router-link
            class="tabsFollowers"
            :to="{ name: 'user-followers', params: { id: user.id } }"
            >追隨者</router-link
          >
        </li>
        <li>
          <router-link
            class="tabsFollowings"
            :to="{ name: 'user-followings', params: { id: user.id } }"
            >正在追隨</router-link
          >
        </li>
      </ul>
      <!-- 跟隨者列表 -->
      <div
        class="followings"
        v-for="following in followings"
        :key="following.followingId"
      >
        <!-- image -->
        <router-link
          :to="{
            name: 'user-other',
            params: { id: following.followingId, type: 'tweets' },
          }"
        >
          <img
            :src="following.followingAvatar"
            class="followingsImage"
            alt=""
          />
        </router-link>
        <!-- Content -->
        <div class="followingsContent">
          <div class="followingsInfo">
            <router-link
              :to="{
                name: 'user-other',
                params: { id: following.followingId, type: 'tweets' },
              }"
              class="followingsName"
              >{{ following.followingName }}</router-link
            >
            <button
              :disabled="isProcessing"
              @click.stop.prevent="deleteFollowing(following.followingId)"
              class="followingsFollowedBtn"
              v-if="following.isFollowed"
              v-show="following.followingId !== $store.state.currentUser.id"
            >
              正在跟隨
            </button>
            <button
              :disabled="isProcessing"
              @click.stop.prevent="addFollowing(following.followingId)"
              class="followingsFollowBtn"
              v-else
              v-show="following.followingId !== $store.state.currentUser.id"
            >
              跟隨
            </button>
          </div>
          <p class="followingsText">{{ following.followingIntroduction }}</p>
        </div>
      </div>
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";
import usersAPI from "./../apis/users";
import { Toast } from "../utility/helpers";
import store from "../store";

export default {
  components: {
    Navbar,
    PopularUsers,
  },
  data() {
    return {
      isProcessing: false,
      followings: [],
      currentTweets: [],
      user: {
        Followers: -1,
        Followings: -1,
        account: "",
        avatar: "",
        cover: "",
        createdAt: "",
        email: "",
        id: -1,
        introduction: "",
        isFollowed: false,
        name: "",
        role: "",
        updatedAt: "",
      },
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchFollowings(id);
    this.fetchUser(id);
    this.fetchTweets(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchFollowings(id);
    this.fetchUser(id);
    this.fetchTweets(id);
  },

  methods: {
    async fetchFollowings(id) {
      try {
        const { data } = await usersAPI.getUserFollowings({ id });
        if (store.state.currentUser.id === id) {
          const newData = data.filter(
            (following) => following.isFollowed === true
          );
          this.followings = newData;
        } else {
          this.followings = data;
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍候再試",
        });
      }
    },
    async fetchUser(id) {
      try {
        const { data } = await usersAPI.getUser({ id });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.user = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍候再試",
        });
      }
    },
    async fetchTweets(id) {
      try {
        const { data } = await usersAPI.getUserTweets({ id });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.currentTweets = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍候再試",
        });
      }
    },
    async addFollowing(id) {
      try {
        this.isProcessing = true;
        await usersAPI.addFollowing({ id });
        const user = this.followings.find((item) => item.followingId === id);

        user.isFollowed = true;

        Toast.fire({
          icon: "success",
          title: "跟隨成功",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "跟隨失敗",
        });
      }
    },
    async deleteFollowing(id) {
      try {
        this.isProcessing = true;
        await usersAPI.deleteFollowing({ id });

        const user = this.followings.find((item) => item.followingId === id);

        user.isFollowed = false;

        Toast.fire({
          icon: "success",
          title: "取消跟隨成功",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "取消跟隨失敗",
        });
      }
    },
  },
};
</script>

<style scoped>
.UserSelfContainer {
  width: 100%;
  display: grid;
  border: 0.1px solid white;
}

#Navbar {
  justify-self: start;
  margin-left: 130px;
  /* width: 210px; */
}

#PopularUsers {
  justify-self: start;
  margin-left: 1000px;
  /* width: 273px; */
}

.UserFollowingsMain {
  position: absolute;
  width: 640px;
  margin-left: 332px;
  overflow-y:scroll;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.UserFollowingsMain::-webkit-scrollbar {
  display: none;
}

.userTitle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 28px;
  height: 74px;
  border-bottom: 1px solid #e6ecf0;
}

.backIcon {
  width: 17px;
  height: 14px;
}

.userInfo {
  margin-left: 19px;
}

.infoName {
  font-weight: 700;
  font-size: 18px;
  height: 24px;
  line-height: 26px;
}

.infoTweetsNumber {
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #6c757d;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #e6ecf0;
}

li {
  padding-bottom: 15px;
  padding-top: 15px;
}

.tabsFollowers,
.tabsFollowings {
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.tabsFollowers {
  padding-left: 45px;
}

.tabsFollowings {
  margin-left: 70px;
}

.tabsFollowers.active,
.tabsFollowings.active {
  color: #ff6600;
  position: relative;
}

.tabsFollowers.active::after,
.tabsFollowings::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 0px;
  height: 2px;
  width: 130px;
  background-color: #ff6600;
  border-radius: 100px;
}

.tabsFollowings::after {
  left: -27px;
}

.followings {
  display: flex;
  min-height: 158px;
  border-bottom: 1px solid #e6ecf0;
  padding: 16px 30px 0 23px;
}

.followingsImage {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
}

.followingsContent {
  width: 100%;
}

.followingsInfo {
  display: flex;
  justify-content: space-between;
}

.followingsText {
  word-break: break-all;
}

.followingsName {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.followingsFollowedBtn {
  width: 96px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

.followingsFollowBtn {
  width: 64px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #ff6600;
  background-color: #fff;
  color: #ff6600;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}
</style>