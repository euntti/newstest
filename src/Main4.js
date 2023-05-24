import "./App3.css";
import React from "react"
import TelegramApi from "node-telegram-api";
import { useState, useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Progressbar from "./components/progressbar";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";
import AnimatedNumbers from "react-animated-numbers";
import axios from "axios";
import useDidMountEffect from "./hooks/useDidMountEffect";
import Modal from "react-modal";