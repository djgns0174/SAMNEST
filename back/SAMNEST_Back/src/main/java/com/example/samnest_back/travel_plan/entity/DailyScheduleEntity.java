package com.example.samnest_back.travel_plan.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
public class DailyScheduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "travel_plan_id")
    private TravelPlanEntity travelPlanEntity;

    @OneToMany(mappedBy = "daliySchedule", cascade = CascadeType.ALL)
    private List<TaskEntity> taskEntities;
}
