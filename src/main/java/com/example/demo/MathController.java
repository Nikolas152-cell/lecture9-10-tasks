package com.example.demo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Parser;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MathController {
    List<String> examples;
    String jsonString = "";

    @GetMapping("/math/examples")
    public String index(@RequestParam(defaultValue = "5") int count) {
        examples = new ArrayList<>(count);
        for (int i = 0; i < count; i++) {
            examples.add(generateExample());
        }
        ObjectMapper objectMapper = new ObjectMapper();
        try {

            objectMapper.writeValue(new File(
                    "src/main/resources/static/mathExamples.json"
            ), examples);
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            jsonString = objectMapper.writeValueAsString(examples);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return jsonString;

    }




    public static String generateExample()
    {
        String example = "";
        char array[] = new char[]{
                '+','-','*','/'
    };
        DecimalFormat decimalFormat = new DecimalFormat("#");
        String firstNumber = String.valueOf(decimalFormat.format(Math.random() * 100));
        example+=firstNumber;
        int index = new Random().nextInt(array.length);
        char operator = array[index];
        example+=operator;
        String secondNumber = String.valueOf(decimalFormat.format(Math.random() * 100 ));
        example+=secondNumber;
        return example;
    }
}


