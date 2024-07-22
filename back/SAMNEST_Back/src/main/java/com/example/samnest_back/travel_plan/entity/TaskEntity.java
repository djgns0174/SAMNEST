package com.example.samnest_back.travel_plan.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private LocalDate time;

    @Column
    private String task;

    @ManyToOne
    @JoinColumn(name = "dailySchedule")
    private DailyScheduleEntity dailyScheduleEntity;
}
