package com.recommend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class RecommendController {
    @RequestMapping("/writeMyRecommend")
    public String writeMyRecommend(){
        return "writeMyRecommend";
    }

    @RequestMapping("/addRecommend")
    @ResponseBody
    public String addRecommend() {
        return "添加成功";
    }
}
